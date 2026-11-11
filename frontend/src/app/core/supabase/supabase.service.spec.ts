import { SupabaseService } from './supabase.service';
import { environment } from '../../../environments/environment.generated';
describe('SupabaseService', () => {
  it('defers client creation and clearly handles unconfigured environments', () => {
    const service = new SupabaseService();
    expect(service.configured).toBe(
      Boolean(environment.supabaseUrl && environment.supabasePublishableKey),
    );
    if (!service.configured)
      expect(() => service.client).toThrow('Supabase public configuration is missing');
    else expect(service.client).toBe(service.client);
  });
});
