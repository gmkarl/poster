#include <curl/curl.h>

int main(int, char**)
{
	// https://memo.cash/profile/1LDRWEGhBuoweM5B18Av2oSTeh3Gjb64Vr?p=posts-and-replies

	// when doing this you lose most thoughts,
	// only the ones BOTH practiced through insanity and supported by the people supporting you

	// please note it will take a long time to finish this, possibly hours, slightly possibly days
	// i am alone and safe, and working with nobody else
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
