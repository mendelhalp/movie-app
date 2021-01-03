//this function receives minutes and return string with the hours and minutes
//input:
//time - number - numbers of minutes (e.g. 112)
//output:
//runtime - string - hours and minutes (e.g. 1h 52m)

const getRuntime = (time) => {
    let runtime;

    let hours = parseInt(time / 60);
    let minutes = time % 60;

    hours !==0 ? runtime=`${hours}h ${minutes}m` : runtime=`${minutes}m`

    return runtime;
}

export default getRuntime;