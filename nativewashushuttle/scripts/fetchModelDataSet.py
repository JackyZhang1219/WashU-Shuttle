import csv
import requests
import json
from datetime import datetime
import time

# create new csv file
file = open('location-data.csv','a')
write = csv.writer(file)

# write header row in csv
write.writerow(['time', 'name', 'x', 'y'])

# url for arcgis api
# if you type this into browser, you will get the json response as well
url = "https://gis-arcsrv1.wustl.edu/arcgis/rest/services/Hosted/Circulator_Locations_Portal/FeatureServer/0/query?where=Type%3D%27Delmar+Loop+Shuttle%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnCentroid=false&sqlFormat=none&resultType=&datumTransformation=&f=pjson"

# example data
# {
#  "exceededTransferLimit": false,
#  "features": [
#   {
#    "attributes": {
#     "devicename": "STL9"
#    },
#    "geometry": {
#     "x": -90.29705047579482,
#     "y": 38.65854644798389
#    }
#  },
# }

while True:

    info = []

    # fetches the response at the specified url
	response = requests.get(url)
    # converts the response text into a python dict data structure
	parse_response = json.loads(response.text)

    # formats data
	shuttle = parse_response['features'][3]
	name = shuttle['attributes']['devicename']

    # note: it's usually (y,x) - latitude before longtitude, so we might need to switch the order
	x = shuttle['geometry']['x']
	y = shuttle['geometry']['y']

    # gets the current time
	now = datetime.now()
	current_time = now.strftime("%H:%M:%S")
	info += [current_time, name, x, y]

	print(info)

	write.writerow(info)

    # waits 15 seconds before doing another fetch
	time.sleep(15)
