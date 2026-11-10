# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

oculate-live-folder-options = 
    .label = Live Folder Options
oculate-live-folder-last-fetched = 
    .label = Last fetch: { $time }
oculate-live-folder-refresh = 
    .label = Refresh
oculate-live-folder-github-option-author-self = 
    .label = Created by Me
oculate-live-folder-github-option-assigned-self = 
    .label = Assigned to Me
oculate-live-folder-github-option-review-requested = 
    .label = My Review Requests
oculate-live-folder-github-option-include-drafts = 
    .label = Include Draft Pull Requests
oculate-live-folder-type-rss = 
    .label = RSS Feed
oculate-live-folder-option-fetch-interval = 
    .label = Fetch Interval
oculate-live-folder-fetch-interval-mins = 
    .label =
        { $mins ->
            [one] 1 minute
           *[other] { $mins } minutes
        }
oculate-live-folder-fetch-interval-hours = 
    .label =
        { $hours ->
            [one] 1 hour
           *[other] { $hours } hours
        }
oculate-live-folder-rss-option-time-range = 
    .label = Time Range
oculate-live-folder-time-range-hours = 
    .label =
        { $hours ->
            [one] Last hour
           *[other] Last { $hours } hours
        }
oculate-live-folder-time-range-all-time = 
    .label = All time
oculate-live-folder-time-range-days = 
    .label =
        { $days ->
            [one] Last day
           *[other] Last { $days } days
        }
oculate-live-folder-rss-option-item-limit = 
    .label = Item Limit
oculate-live-folder-rss-option-feed-url = 
    .label = Feed URL
oculate-live-folder-rss-prompt-feed-url = Please enter the feed URL
oculate-live-folder-rss-option-item-limit-num = 
    .label = { $limit } items
oculate-live-folder-failed-fetch = 
    .label = Failed to update
    .tooltiptext = Failed to update. Try again.
oculate-live-folder-github-no-auth = 
    .label = Not signed in to GitHub
    .tooltiptext = Sign back in to GitHub.
oculate-live-folder-github-no-filter = 
    .label = Filter is not set
    .tooltiptext = No filter set, nothing will be fetched.
oculate-live-folder-rss-invalid-url-title = Failed to create the Live Folder
oculate-live-folder-rss-invalid-url-description = The feed URL is invalid. Check the address and try again
oculate-live-folder-github-option-repo-filter = 
    .label = Repositories
oculate-live-folder-github-option-repo = 
    .label = { $repo }
oculate-live-folder-github-pull-requests = 
    .label = Pull Requests
oculate-live-folder-github-issues = 
    .label = Issues
oculate-live-folder-github-option-repo-list-note = 
    .label = This list is generated based on your currently active pull requests.
oculate-live-folders-promotion-title = Live Folder Created!
oculate-live-folders-promotion-description = Latest content from your RSS feeds or GitHub pull requests will appear here automatically.
