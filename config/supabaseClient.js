import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pqokpazkztgvpnwszibz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxb2twYXprenRndnBud3N6aWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg5Mjk2NjUsImV4cCI6MTk3NDUwNTY2NX0.0_-g-tk25SYVLiaCAMSA6Sod2FUeBrg99uPsqsndYoY';

export const supabase = createClient(supabaseUrl, supabaseKey);