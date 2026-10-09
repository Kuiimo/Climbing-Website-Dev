// Brushworks Supabase connection

const SUPABASE_URL = "https://zioczhvvuzthxwezkziz.supabase.co";

const SUPABASE_KEY = "sb_publishable_1k2qntRr7-IeQsUqJ5Q09Q_Og_bQMcn";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
