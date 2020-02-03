# Munenori

## A free-to-use API to access the stats of the Toronto Blue Jays

### Routes
- /year/<1977-2019> - Returns basic stats about that year, record, manager name, attendance, 
- /year/game/<1-162> - Returns the stats about that particular game

- /player/<BBrefid> - Returns the career (as a Blue Jay) stats for that player, based on their BB Reference ID
- /players/allTime/HR - Returns the top 25 all-time home-run leaders (as a Blue Jay)
- /players/allTime/WAR - Returns the top 25 all-time WAR leaders (as a Blue Jay)

### Player Routes
- /player/pitcher/<BBrefid> - Returns the career stats as a Blue Jay
- /player/hitter/<BBrefid> - Returns the career stats as a Blue Jay
