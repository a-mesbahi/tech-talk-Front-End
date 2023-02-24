import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'env'
})
export class EnvPipe implements PipeTransform {

  transform(entr: string): any {
    return environment['fireBaseUrl']+entr;
  }

}
