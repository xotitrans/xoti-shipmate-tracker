import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { supabase } from '@/integrations/supabase/client';
import { Search, Package, MapPin, Calendar, Truck, Phone, Clock, CheckCircle, AlertCircle, Weight, Shield, AlertTriangle, FileSignature, Euro, Zap, CreditCard, Hash, ImageIcon, User, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ShipmentMap from '@/components/ShipmentMap';
import ManualLocationUpdate from '@/components/ManualLocationUpdate';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'react-router-dom';

interface TrackingData {
  id: string;
  tracking_number: string;
  status: string;
  sender_name: string;
  sender_address: string;
  sender_phone: string;
  recipient_name: string;
  recipient_address: string;
  recipient_phone: string;
  current_location: string | null;
  current_latitude: number | null;
  current_longitude: number | null;
  estimated_delivery: string | null;
  actual_delivery: string | null;
  transport_type: string;
  weight: number | null;
  dimensions: string | null;
  declared_value: number | null;
  insured_value: number | null;
  priority_level: string | null;
  is_fragile: boolean | null;
  is_dangerous: boolean | null;
  requires_signature: boolean | null;
  transport_cost: number | null;
  payment_status: string | null;
  currency: string | null;
  emergency_contact_name: string | null;
  emergency_contact_phone: string | null;
  payment_method: string | null;
  client_reference: string | null;
  order_number: string | null;
  special_instructions: string | null;
  delivery_instructions: string | null;
  preferred_delivery_time: string | null;
  created_at: string;
  notes: string | null;
}

interface TrackingHistoryItem {
  id: string;
  status: string;
  location: string;
  description: string | null;
  timestamp: string;
}

interface ShipmentPhoto {
  id: string;
  shipment_id: string;
  photo_url: string;
  description: string | null;
  uploaded_by: string;
  created_at: string;
}

const Tracking = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get('number') || '');
  const [trackingResult, setTrackingResult] = useState<TrackingData | null>(null);
  const [trackingHistory, setTrackingHistory] = useState<TrackingHistoryItem[]>([]);
  const [shipmentPhotos, setShipmentPhotos] = useState<ShipmentPhoto[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showLocationUpdate, setShowLocationUpdate] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { toast } = useToast();
  const { currentLanguage } = useLanguage();
  const { currentLanguage: routeLanguage } = useLanguageNavigation();
  const { user } = useAuth();
  const location = useLocation();
  const t = translations[currentLanguage];

  // Check if we're in admin context
  const isAdminContext = location.pathname.startsWith('/admin');

  useEffect(() => {
    const numberFromUrl = searchParams.get('number');
    if (numberFromUrl && !trackingResult) {
      setTrackingNumber(numberFromUrl);
      handleTrack(numberFromUrl);
    }
  }, [searchParams]);

  const handleTrack = async (numberToSearch?: string) => {
    const searchNumber = numberToSearch || trackingNumber;
    
    if (!searchNumber.trim()) {
      toast({
        title: t.tracking.error,
        description: t.tracking.enterTrackingNumber,
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    setHasError(false);
    
    try {
      const { data: shipment, error: shipmentError } = await supabase
        .from('shipments')
        .select('*')
        .eq('tracking_number', searchNumber)
        .single();

      if (shipmentError || !shipment) {
        setTrackingResult(null);
        setTrackingHistory([]);
        setShipmentPhotos([]);
        toast({
          title: t.tracking.notFoundTitle,
          description: t.tracking.notFoundDesc,
          variant: "destructive",
        });
        return;
      }

      const { data: history, error: historyError } = await supabase
        .from('tracking_history')
        .select('*')
        .eq('shipment_id', shipment.id)
        .order('timestamp', { ascending: false });

      // Fetch shipment photos
      console.log("📸 Fetching photos for shipment ID:", shipment.id);
      const { data: photos, error: photosError } = await supabase
        .from('shipment_photos')
        .select('*')
        .eq('shipment_id', shipment.id)
        .order('created_at', { ascending: false });

      console.log("📸 Photos fetch result:", { photos, photosError });
      if (photosError) {
        console.error("❌ Error fetching photos:", photosError);
      } else {
        console.log("✅ Found", photos?.length || 0, "photos");
      }

      setTrackingResult(shipment);
      setTrackingHistory(history || []);
      setShipmentPhotos(photos || []);
      
      if (!numberToSearch) {
        setSearchParams({ number: searchNumber });
      }
      
      toast({
        title: t.tracking.packageFoundToast,
        description: `${t.tracking.currentStatus}: ${getStatusText(shipment.status)}`,
      });
      
    } catch (error) {
      console.error('Error tracking shipment:', error);
      setHasError(true);
      toast({
        title: t.tracking.searchError,
        description: t.tracking.searchErrorDesc,
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'in_transit': return <Truck className="h-4 w-4" />;
      case 'delivered': return <CheckCircle className="h-4 w-4" />;
      case 'failed': return <AlertCircle className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'in_transit': return 'default';
      case 'delivered': return 'default';
      case 'failed': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    return t.tracking.statuses[status as keyof typeof t.tracking.statuses] || status;
  };

  const getTransportText = (type: string) => {
    return t.tracking.transportTypes[type as keyof typeof t.tracking.transportTypes] || type;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">{t.tracking.title}</h1>
        <p className="text-muted-foreground">{t.tracking.subtitle}</p>
      </div>

      <div className="max-w-2xl mx-auto mb-8">
        <Card>
          <CardHeader>
            <CardTitle>{t.tracking.searchTitle}</CardTitle>
            <CardDescription>{t.tracking.searchSubtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder={t.tracking.placeholder}
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button onClick={() => handleTrack()} disabled={isSearching} className="shrink-0">
                {isSearching ? (
                  <Package className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Search className="h-4 w-4 mr-2" />
                )}
                {isSearching ? t.tracking.searching : t.tracking.searchButton}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {trackingResult && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    {t.tracking.packageTitle} {trackingResult.tracking_number}
                  </div>
                  {isAdminContext && user && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowLocationUpdate(!showLocationUpdate)}
                      className="ml-4"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      {t.tracking.updateLocation}
                    </Button>
                  )}
                </CardTitle>
                <Badge variant={getStatusColor(trackingResult.status) as any}>
                  {getStatusIcon(trackingResult.status)}
                  <span className="ml-1">{getStatusText(trackingResult.status)}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {t.tracking.sender}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>{t.tracking.name}:</strong> {trackingResult.sender_name}</p>
                    <p><strong>{t.tracking.address}:</strong> {trackingResult.sender_address}</p>
                    <p><strong>{t.tracking.phoneNumber}:</strong> {trackingResult.sender_phone}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    {t.tracking.recipient}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>{t.tracking.name}:</strong> {trackingResult.recipient_name}</p>
                    <p><strong>{t.tracking.address}:</strong> {trackingResult.recipient_address}</p>
                    <p><strong>{t.tracking.phoneNumber}:</strong> {trackingResult.recipient_phone}</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{t.tracking.currentPosition}</p>
                    <p className="text-sm text-muted-foreground">
                      {trackingResult.current_location || t.tracking.notDefined}
                    </p>
                    {trackingResult.current_latitude && trackingResult.current_longitude && (
                      <p className="text-xs text-muted-foreground mt-1">
                        GPS: {trackingResult.current_latitude.toFixed(6)}, {trackingResult.current_longitude.toFixed(6)}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{t.tracking.transportType}</p>
                    <p className="text-sm text-muted-foreground">
                      {getTransportText(trackingResult.transport_type)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{t.tracking.estimatedDeliveryDate}</p>
                    <p className="text-sm text-muted-foreground">
                      {trackingResult.estimated_delivery ? 
                        new Date(trackingResult.estimated_delivery).toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'de' ? 'de-DE' : currentLanguage === 'it' ? 'it-IT' : currentLanguage === 'es' ? 'es-ES' : 'pt-PT') : 
                        t.tracking.notDefined
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                 {trackingResult.weight && (
                  <div className="flex items-center gap-2">
                    <Weight className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{t.tracking.weight}</p>
                      <p className="text-sm text-muted-foreground">{trackingResult.weight} kg</p>
                    </div>
                  </div>
                )}
                
                 {trackingResult.dimensions && (
                   <div className="flex items-center gap-2">
                     <Package className="h-4 w-4 text-muted-foreground" />
                     <div>
                       <p className="text-sm font-medium">{t.tracking.dimensions}</p>
                       <p className="text-sm text-muted-foreground">{trackingResult.dimensions}</p>
                     </div>
                   </div>
                 )}

                 {trackingResult.declared_value && (
                   <div className="flex items-center gap-2">
                     <Euro className="h-4 w-4 text-muted-foreground" />
                     <div>
                       <p className="text-sm font-medium">{t.tracking.declaredValue}</p>
                       <p className="text-sm text-muted-foreground">
                         {trackingResult.declared_value} {trackingResult.currency || 'EUR'}
                       </p>
                     </div>
                   </div>
                 )}

                 {trackingResult.transport_cost && (
                   <div className="flex items-center gap-2">
                     <Truck className="h-4 w-4 text-muted-foreground" />
                     <div>
                       <p className="text-sm font-medium">{t.tracking.transportCost}</p>
                       <p className="text-sm text-muted-foreground">
                         {trackingResult.transport_cost} {trackingResult.currency || 'EUR'}
                       </p>
                     </div>
                   </div>
                 )}

                 {trackingResult.priority_level && trackingResult.priority_level !== 'normal' && (
                   <div className="flex items-center gap-2">
                     <Zap className="h-4 w-4 text-muted-foreground" />
                     <div>
                       <p className="text-sm font-medium">{t.tracking.priority}</p>
                       <p className="text-sm text-muted-foreground">
                         {t.tracking.priorities[trackingResult.priority_level as keyof typeof t.tracking.priorities] || trackingResult.priority_level}
                       </p>
                     </div>
                   </div>
                 )}
              </div>

              {/* Financial and Reference Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {(trackingResult.client_reference || trackingResult.order_number) && (
                  <div className="space-y-3">
                  {trackingResult.client_reference && (
                    <div className="flex items-center gap-2">
                      <Hash className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{t.tracking.reference}</p>
                        <p className="text-sm text-muted-foreground">{trackingResult.client_reference}</p>
                      </div>
                    </div>
                  )}
                  {trackingResult.order_number && (
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{t.tracking.reference}</p>
                        <p className="text-sm text-muted-foreground">{trackingResult.order_number}</p>
                      </div>
                    </div>
                  )}
                  </div>
                )}

                {(trackingResult.payment_status || trackingResult.payment_method) && (
                  <div className="space-y-3">
                     {trackingResult.payment_status && (
                       <div className="flex items-center gap-2">
                         <CreditCard className="h-4 w-4 text-muted-foreground" />
                         <div>
                           <p className="text-sm font-medium">{t.tracking.status}</p>
                           <Badge variant={trackingResult.payment_status === 'paid' ? 'default' : 'secondary'} className="text-xs">
                             {t.tracking.paymentStatuses[trackingResult.payment_status as keyof typeof t.tracking.paymentStatuses] || trackingResult.payment_status}
                           </Badge>
                         </div>
                       </div>
                     )}
                     {trackingResult.payment_method && (
                       <div className="flex items-center gap-2">
                         <CreditCard className="h-4 w-4 text-muted-foreground" />
                         <div>
                           <p className="text-sm font-medium">{t.tracking.method}</p>
                           <p className="text-sm text-muted-foreground">
                             {t.tracking.paymentMethods[trackingResult.payment_method as keyof typeof t.tracking.paymentMethods] || trackingResult.payment_method}
                           </p>
                         </div>
                       </div>
                     )}
                  </div>
                )}

                 {trackingResult.insured_value && (
                   <div className="flex items-center gap-2">
                     <Shield className="h-4 w-4 text-muted-foreground" />
                     <div>
                       <p className="text-sm font-medium">{t.tracking.insuredValue}</p>
                       <p className="text-sm text-muted-foreground">
                         {trackingResult.insured_value} {trackingResult.currency || 'EUR'}
                       </p>
                     </div>
                   </div>
                 )}
              </div>

              {/* Special Indicators */}
              {(trackingResult.is_fragile || trackingResult.is_dangerous || trackingResult.requires_signature) && (
                <div className="mb-6">
                   <h4 className="text-sm font-medium mb-3">{t.tracking.specialIndicators}</h4>
                   <div className="flex flex-wrap gap-2">
                     {trackingResult.is_fragile && (
                       <Badge variant="outline" className="text-orange-600 border-orange-600">
                         <Package className="h-3 w-3 mr-1" />
                         {t.tracking.fragile}
                       </Badge>
                     )}
                     {trackingResult.is_dangerous && (
                       <Badge variant="outline" className="text-red-600 border-red-600">
                         <AlertTriangle className="h-3 w-3 mr-1" />
                         {t.tracking.dangerous}
                       </Badge>
                     )}
                     {trackingResult.requires_signature && (
                       <Badge variant="outline" className="text-blue-600 border-blue-600">
                         <FileSignature className="h-3 w-3 mr-1" />
                         {t.tracking.requiresSignature}
                       </Badge>
                     )}
                  </div>
                </div>
              )}

              {/* Instructions and Notes */}
              {(trackingResult.special_instructions || trackingResult.delivery_instructions || trackingResult.preferred_delivery_time || trackingResult.notes) && (
                <div className="space-y-3 mb-6">
                   {trackingResult.special_instructions && (
                     <div>
                       <p className="text-sm font-medium">{t.tracking.specialInstructions}</p>
                       <p className="text-sm text-muted-foreground">{trackingResult.special_instructions}</p>
                     </div>
                   )}
                   {trackingResult.delivery_instructions && (
                     <div>
                       <p className="text-sm font-medium">{t.tracking.deliveryInstructions}</p>
                       <p className="text-sm text-muted-foreground">{trackingResult.delivery_instructions}</p>
                     </div>
                   )}
                   {trackingResult.preferred_delivery_time && (
                     <div>
                       <p className="text-sm font-medium">{t.tracking.preferredDeliveryTime}</p>
                       <p className="text-sm text-muted-foreground">{trackingResult.preferred_delivery_time}</p>
                     </div>
                   )}
                   {trackingResult.notes && (
                     <div>
                       <p className="text-sm font-medium">{t.tracking.notes}</p>
                       <p className="text-sm text-muted-foreground">{trackingResult.notes}</p>
                     </div>
                   )}
                </div>
              )}

              {/* Emergency Contact */}
              {trackingResult.emergency_contact_name && (
                <div className="pt-4 border-t">
                   <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                     <Phone className="h-4 w-4" />
                     {t.tracking.emergencyContact}
                   </h4>
                  <div className="text-sm space-y-1">
                    <p><strong>{t.tracking.name}:</strong> {trackingResult.emergency_contact_name}</p>
                    {trackingResult.emergency_contact_phone && (
                      <p><strong>{t.tracking.phoneNumber}:</strong> {trackingResult.emergency_contact_phone}</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Manual Location Update - Only shown in admin context */}
          {showLocationUpdate && trackingResult && !hasError && isAdminContext && user && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  {t.tracking.updateLocation}
                </CardTitle>
                <CardDescription>{t.tracking.updateLocationDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ManualLocationUpdate 
                  shipmentId={trackingResult.id}
                  trackingNumber={trackingResult.tracking_number}
                  currentLocation={trackingResult.current_location}
                  currentLatitude={trackingResult.current_latitude}
                  currentLongitude={trackingResult.current_longitude}
                  onLocationUpdated={() => {
                    // Refresh tracking data
                    handleTrack(trackingResult.tracking_number);
                    setShowLocationUpdate(false);
                  }}
                />
              </CardContent>
            </Card>
          )}

          {/* GPS Map */}
          <ShipmentMap
            shipmentId={trackingResult.id}
            latitude={trackingResult.current_latitude}
            longitude={trackingResult.current_longitude}
            currentLocation={trackingResult.current_location}
            senderAddress={trackingResult.sender_address}
            recipientAddress={trackingResult.recipient_address}
          />

          {/* Shipment Photos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                {t.tracking.photos.title}
              </CardTitle>
              <CardDescription>{t.tracking.photos.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              {shipmentPhotos.length === 0 ? (
                <div className="flex items-center justify-center h-32 bg-muted rounded-lg">
                  <div className="text-center">
                    <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{t.tracking.photos.noPhotos}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t.tracking.photos.noPhotosDesc}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {shipmentPhotos.map((photo) => (
                    <div key={photo.id} className="group relative">
                      <div className="aspect-square relative overflow-hidden rounded-lg border bg-muted">
                        <img
                          src={photo.photo_url}
                          alt={photo.description || t.tracking.photos.viewPhoto}
                          className="object-cover w-full h-full transition-transform group-hover:scale-105 cursor-pointer"
                          loading="lazy"
                          onClick={() => window.open(photo.photo_url, '_blank')}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors cursor-pointer flex items-center justify-center"
                             onClick={() => window.open(photo.photo_url, '_blank')}>
                          <Button
                            variant="secondary" 
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {t.tracking.photos.viewPhoto}
                          </Button>
                        </div>
                      </div>
                      {photo.description && (
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                          {photo.description}
                        </p>
                      )}
                      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{t.tracking.photos.uploadedBy}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {new Date(photo.created_at).toLocaleDateString(
                          currentLanguage === 'fr' ? 'fr-FR' : 
                          currentLanguage === 'de' ? 'de-DE' : 
                          currentLanguage === 'it' ? 'it-IT' : 
                          currentLanguage === 'es' ? 'es-ES' : 'pt-PT'
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tracking History */}
          {trackingHistory.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {t.tracking.trackingHistory}
                </CardTitle>
                <CardDescription>
                  {t.tracking.faqSubtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingHistory.map((item, index) => (
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`
                          w-3 h-3 rounded-full border-2 
                          ${index === 0 ? 'bg-primary border-primary' : 'bg-background border-muted-foreground'}
                        `} />
                        {index < trackingHistory.length - 1 && (
                          <div className="w-0.5 h-8 bg-muted-foreground/30 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {getStatusIcon(item.status)}
                          <span className="font-medium text-sm">
                            {getStatusText(item.status)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(item.timestamp).toLocaleString(
                              currentLanguage === 'fr' ? 'fr-FR' : 
                              currentLanguage === 'de' ? 'de-DE' : 
                              currentLanguage === 'it' ? 'it-IT' : 
                              currentLanguage === 'es' ? 'es-ES' : 'pt-PT'
                            )}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </div>
                          {item.description && (
                            <p className="text-xs">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default Tracking;