import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment.generated';
@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private instance?: SupabaseClient;
  get configured(): boolean {
    return !!environment.supabaseUrl && !!environment.supabasePublishableKey;
  }
  get client(): SupabaseClient {
    if (!this.configured) throw new Error('Supabase public configuration is missing. See README.');
    return (this.instance ??= createClient(
      environment.supabaseUrl,
      environment.supabasePublishableKey,
      {
        auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
      },
    ));
  }
}
