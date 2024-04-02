const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2300, 453, 5222, 6733, 7402, 8334];
const recentYouTubeViews = [989, 2300, 453, 5222, 6733, 7402, 8334];

function mean(viewsArray) {
    let totalViews = 0;
    for (let i = 0; i < viewsArray.length; i++){
        totalViews += viewsArray[i];
    }
    console.log("Your total of views is: " + totalViews);
    console.log("Your array length is: " + viewsArray.length);
    console.log("The average number of views is: " + (totalViews / viewsArray.length))
}

function median(viewsArray) {
    let sortedStats = 0;
    let middleIndex = 0;
    
    sortedStats = viewsArray.sort((a, b) => a - b);
    middleIndex = Math.floor(sortedStats.length / 2);

    console.log("The sorted array now is: " + sortedStats);
    console.log("The middle index of it is: " + viewsArray[middleIndex]);
}

mean(recentTikTokViews);
median(recentTikTokViews);