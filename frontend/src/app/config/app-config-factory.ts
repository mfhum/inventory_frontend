import { AppConfigService } from './app-config.service';

export function appInit(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}
