import re
from datetime import datetime as dt

times_regex = re.compile(r"\d{1,2}:\d{2} .M")

# Instructions
#   Find the route data online. they are linked here https://parking.wustl.edu/campus-shuttle-system/
#       ex. https://parking.wustl.edu/items/campus-circulator/ 
#   Open the weekday or weekend schedule and copy the times from the table into input.txt
#   Create encodings for the stops and add them into the variable names
#       - They must be in the order they appear in the data table
#       - Make sure to use the same encodings for a stop each time
#           ex. the clocktower must be encoded the same for each route it 
#               is a stop on
#   Run the code and see the output in schedule.json
#   Add this output to the database (currently the local file totalSchedule.json) 
#       under the section shuttleRoutes > *routeName* > *weekday or weekend* 


# Possible Edge Cases
#   -   If the shuttle stops a certain stop more than the other stops, I am not sure that the code
#       will correctly interpret the empty cells in the data row.
#   -   Sometimes there are drop off only stops at the end of the night. The data will read "10:55 PM drop off"
#       this is not addressed in the code or database design.

names = ["clkTower","mall","mill","skink","danfGarage","mall"]

timesCompiled = {}
for name in names:
    timesCompiled[name] = []
    
with open("input.txt") as f:
    for line in f.read().splitlines():
        matches = times_regex.findall(line)

        for i, timeStr in enumerate(matches):
            time = dt.strptime(timeStr,'%I:%M %p')
            output = dt.strftime(time,'%H:%M')
            timesCompiled[names[i]].append(output)

with open("schedule.json","w") as out: 
    out.write("{")
    output = ""
    for route, times in timesCompiled.items():
        output += "\""+route+"\":["

        combinedTimes = ""
        for time in times:
            combinedTimes += "\""+time+"\","
        combinedTimes = combinedTimes[:-1]

        output += combinedTimes + "],\n"
    out.write(output[:-2]+"}")