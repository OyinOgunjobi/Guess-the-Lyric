#!/usr/bin/python
# prerequisite: mkdir info

import json
import sys
import urllib2
import time

api_key = '38fcbc8d838069ad487c913bf0519f7a'

track_request = 'track.lyrics.get'
service_url = 'http://api.musixmatch.com/ws/1.1/' + track_request + '?apikey=' + api_key

# want to support a track list (or various track lists) to populate the choose-song combobox; index by track id
# when track id chosen, send game page containing full details ... collect from a subdir or file
# cut 1 from this output for lyrics.py; put those in the corresponding subdir or file

def getTracks(data):
    for track in data.get('message').get('body').get('track_list'):
		track = track.get('track')
		id, title, artist, url =  track.get('track_id'), track.get('track_name'), track.get('artist_name'), track.get('track_share_url')
		
		lyric_url = service_url + "&track_id=" + str(id)
		
		
		
		
        # see aTrack.txt for other interesting fields - e.g. cover art
		with open('info/' + str(id), 'w') as info:
			print >>info, title.encode('utf_8')
			print >>info, artist.encode('utf_8')
			print >>info, url.encode('utf_8')
			
			
			
		result = json.load(urllib2.urlopen(lyric_url))
		text = result.get('message').get('body').get('lyrics').get('lyrics_body')
        
		time.sleep(1)	
			
			
		with open('lyrics/' + str(id), 'w') as lyrics:
			print >>lyrics, text.encode('utf_8')

		html = '<option value="%u">%s (%s)</option>' % (id, title, artist)
		print html.encode('utf_8')

with open(sys.argv[1], 'r') as f:
    getTracks(json.load(f))
