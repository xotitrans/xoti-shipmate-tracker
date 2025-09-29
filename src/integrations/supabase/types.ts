export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      shipment_photos: {
        Row: {
          created_at: string
          description: string | null
          id: string
          photo_url: string
          shipment_id: string
          uploaded_by: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          photo_url: string
          shipment_id: string
          uploaded_by: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          photo_url?: string
          shipment_id?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipment_photos_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
        ]
      }
      shipments: {
        Row: {
          actual_delivery: string | null
          client_reference: string | null
          created_at: string
          currency: string | null
          current_latitude: number | null
          current_location: string | null
          current_longitude: number | null
          declared_value: number | null
          delivery_instructions: string | null
          dimensions: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          estimated_delivery: string | null
          id: string
          insured_value: number | null
          is_dangerous: boolean | null
          is_fragile: boolean | null
          notes: string | null
          order_number: string | null
          payment_method: string | null
          payment_status: string | null
          preferred_delivery_time: string | null
          priority_level: string | null
          recipient_address: string
          recipient_name: string
          recipient_phone: string
          requires_signature: boolean | null
          sender_address: string
          sender_name: string
          sender_phone: string
          special_instructions: string | null
          status: string
          tracking_number: string
          transport_cost: number | null
          transport_type: string
          updated_at: string
          user_id: string
          weight: number | null
        }
        Insert: {
          actual_delivery?: string | null
          client_reference?: string | null
          created_at?: string
          currency?: string | null
          current_latitude?: number | null
          current_location?: string | null
          current_longitude?: number | null
          declared_value?: number | null
          delivery_instructions?: string | null
          dimensions?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          estimated_delivery?: string | null
          id?: string
          insured_value?: number | null
          is_dangerous?: boolean | null
          is_fragile?: boolean | null
          notes?: string | null
          order_number?: string | null
          payment_method?: string | null
          payment_status?: string | null
          preferred_delivery_time?: string | null
          priority_level?: string | null
          recipient_address: string
          recipient_name: string
          recipient_phone: string
          requires_signature?: boolean | null
          sender_address: string
          sender_name: string
          sender_phone: string
          special_instructions?: string | null
          status?: string
          tracking_number?: string
          transport_cost?: number | null
          transport_type: string
          updated_at?: string
          user_id: string
          weight?: number | null
        }
        Update: {
          actual_delivery?: string | null
          client_reference?: string | null
          created_at?: string
          currency?: string | null
          current_latitude?: number | null
          current_location?: string | null
          current_longitude?: number | null
          declared_value?: number | null
          delivery_instructions?: string | null
          dimensions?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          estimated_delivery?: string | null
          id?: string
          insured_value?: number | null
          is_dangerous?: boolean | null
          is_fragile?: boolean | null
          notes?: string | null
          order_number?: string | null
          payment_method?: string | null
          payment_status?: string | null
          preferred_delivery_time?: string | null
          priority_level?: string | null
          recipient_address?: string
          recipient_name?: string
          recipient_phone?: string
          requires_signature?: boolean | null
          sender_address?: string
          sender_name?: string
          sender_phone?: string
          special_instructions?: string | null
          status?: string
          tracking_number?: string
          transport_cost?: number | null
          transport_type?: string
          updated_at?: string
          user_id?: string
          weight?: number | null
        }
        Relationships: []
      }
      tracking_history: {
        Row: {
          created_at: string
          description: string | null
          id: string
          latitude: number | null
          location: string
          longitude: number | null
          shipment_id: string
          status: string
          timestamp: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          latitude?: number | null
          location: string
          longitude?: number | null
          shipment_id: string
          status: string
          timestamp?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          latitude?: number | null
          location?: string
          longitude?: number | null
          shipment_id?: string
          status?: string
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "tracking_history_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
