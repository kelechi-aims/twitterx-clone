import { Pipe, PipeTransform } from '@angular/core';
import { format, formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'twitterTime'
})
export class TwitterTimePipe implements PipeTransform {

  transform(timestamp: Date | string): string {
    const now = new Date();
    const postTime = new Date(timestamp);

    //Use the date-fns to calculate relative time
    const difference = formatDistanceToNow(postTime, { addSuffix: true });

    //If the post is older than 7 days, show a static date
    const daysDifference = (now.getTime() - postTime.getTime()) / (1000 * 3600 * 24);
    if (daysDifference > 7) {
      return format(postTime, 'MMM d, yyyy');
    }
    return difference;
  }

}
