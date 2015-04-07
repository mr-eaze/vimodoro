Vimodoro helps you manage your workflow by playing you short videos during periodic breaks in your workday. We use Vimeo's API to find the most recently uploaded videos in your preferred categories, of your preferred length.

Each user has his/her own preset work time lengths (default 60 min) and break time lengths (default 5 min), as well as a saved list of his/her preferred categories.

Each time a user logs into Vimodoro she has the chance to edit her preset time intervals, and her chosen categories. When she clicks 'Start', Vimodoro will start a countdown for the time she's allotted for herself to work.

During that interval, Vimodoro will be searching Vimeo's API for a video to play you during your break. Vimodoro will pick one of your preferred categories at random, pull 50 of the most recent videos from Vimeo's API, and find one that's both embeddable, and within one minute in length of the duration of your break. If Vimodoro can't find an embeddable video in that time frame, we will try a different preferred category, or go to the next page of results in that category (current page numbers for all categories are stored in a session cookie).

Once we've found a video, Vimodoro will wait until it's time for your break and then automatically play your video. We then use Vimeo's Froogaloop library to listen for the end of the video, and when it's over, we start the clock again and start searching for videos again, picking up on the page where we left off.

Trello:
https://trello.com/b/OulLeH5A/vimodoro