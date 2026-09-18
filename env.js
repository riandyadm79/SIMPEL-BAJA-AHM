// Konfigurasi koneksi ke Supabase
const SUPABASE_URL = 'https://xypzzeajzczsevvwthnm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5cHp6ZWFqemN6c2V2dnd0aG5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NDc1MzMsImV4cCI6MjEwNTEyMzUzM30.SxhPnryhz9GwFcUvRtAwFesLOsN9zj2cwrFZsOb0EUs';

// PERBAIKAN: Gunakan window.supabase agar tidak bentrok dengan variabel lokal
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);