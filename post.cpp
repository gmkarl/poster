#include <curl/curl.h>

int main(int, char**)
{
	CURL *curl;
	
	curl = curl_easy_init();
	if(curl) {
		curl_easy_setopt(curl, CURLOPT_URL, "google.com");
		auto res = curl_easy_perform(curl);
		// lookup in curl api how to retrieve data
		// likely in header file content of objcet
		// then use bitcoin cash REST API to post message
		// posted by gmkarl@gmail.com in bitcoin cash history
		// on 2019-05-19
		//
	}
}
