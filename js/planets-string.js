(function () {
    "use strict";

    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    // var planetsArray = planetsString.split( "");
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    // var str = `{<br>}Mercury{</br>} , {<br>}Venus{</br>} , {<br>}Earth{</br>} , {<br>} Mars{</br>} , {<br>}Jupiter{</br>} , {<br>}Saturn{</br>} , {<br>}Uranus{</br>} , {<br>}Neptune{</br>}`
    //
    // console.log(str + `{<br>}`);
    //
    //
    // console.log('--------------------------------------------------')

    /**
     BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newStr = `{<ul>}
                         {<Li>Mercury</Li>}
                         {<Li>Venus</Li>}
                         {<Li>Earth</Li>}
                         {<Li>Mars</Li>}
                         {<Li>Jupiter</Li>}
                         {<Li>Saturn</Li>}
                         {<Li>Uranus</Li>}
                         {<Li>Neptune</Li>}
                 {</ul>}`;
    console.log(newStr);


})();