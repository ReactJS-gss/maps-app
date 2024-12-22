

export const getUserLocation = async(): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([ coords.longitude, coords.latitude ])
            },
            ( err ) => {
                alert('Geolocation not found')
                console.log(err);
                reject();
            }
        );
    });
}