/*      - - - SEARCH BAR - - -         */

var sitePages = [
    {
        keyword: "home",
        link: '/home'
    },
    {
        keyword: "beginner",
        link: '/beginner'
    },
    {
        keyword: "basic",
        link: '/basic'
    },
    {
        keyword: "elliptical",
        link: '/elliptical'
    },
    {
        keyword: "bikes",
        link: '/bikes'
    },
    {
        keyword: "killer",
        link: '/killer'
    },
    {
        keyword: "calendar",
        link: '/calendar'
    },
    {
        keyword: "cardio",
        link: '/cardio'
    },
    {
        keyword: "profile",
        link: '/profile'
    },
    {
        keyword: "treadmill",
        link: '/treadmill'
    },
    {
        keyword: "weight",
        link: '/weightlift'
    },
    {
        keyword: "leg",
        link: '/leg'
    }
]

function searchWebsite(){
    var searchInput = document.getElementById("search").value;
    for (i = 0; i < sitePages.length; i++ ){
        if( 0 == searchInput.localeCompare(sitePages[i].keyword)){
            window.location = sitePages[i].link;
            return;
        }
    }
    alert("No webpages match. Try searching again.");
}
