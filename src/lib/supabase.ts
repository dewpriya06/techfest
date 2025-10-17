import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  max_participants: number;
  current_participants: number;
  image_url: string;
  created_at: string;
}

export interface Registration {
  event_id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
