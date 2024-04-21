#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

string findLongestSubstring(const string& s, int k) {
    unordered_map<string, int> substrCount;
    string longestSubstring = "";
    int start = 0;

    for (int end = 0; end < s.length(); ++end) {
        string currentSubstring = s.substr(start, end - start + 1);
        substrCount[currentSubstring]++;

        while (substrCount[currentSubstring] >= k) {
            if (currentSubstring.length() > longestSubstring.length()) {
                longestSubstring = currentSubstring;
            }
            substrCount[s.substr(start, start + 1)]--;
            start++;
            currentSubstring = s.substr(start, end - start + 1);
        }
    }

    return longestSubstring;
}

int main() {
    int n, k;
    cout << "Enter the length of the string and the value of k: ";
    cin >> n >> k;

    string s;
    cout << "Enter the string of length " << n << ": ";
    cin >> s;

    string longestSubstring = findLongestSubstring(s, k);
    cout << "Longest substring occurring at least " << k << " times: " << longestSubstring << endl;

    return 0;
}
