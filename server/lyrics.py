import urllib2
import json
api_key = '38fcbc8d838069ad487c913bf0519f7a'


service_url = 'http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=' + api_key
track_request = 'track.lyrics.get?apikey='
#track_id2=15953433



trackIDs = [34248043, 72862438]

#lyric_file = open()

for track in trackIDs:
	
	url = service_url + "&track_id=" + str(track)
	print url
	#lyrics = urllib2.urlopen(url)
	#print lyrics.read()
	result = json.load(urllib2.urlopen(url))
	print str(result.get('message').get('body').get('lyrics').get('lyrics_body'))
#lyric_file.close()



	

#http://api.musixmatch.com/ws/1.1/track.search?q_track=back%20to%20december&q_artist=taylor%20swift&f_has_lyrics=1&apikey=38fcbc8d838069ad487c913bf0519f7a