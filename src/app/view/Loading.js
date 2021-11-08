import React, {useEffect, useState} from "react";

const Loading = () => {

    const [loading, setLoading] = useState('Loading');
    useEffect(() => {
        let num = 0;
        setInterval(() => {
            num++;
            if(num === 6) {setLoading("Loading"); num = 0;}
            else setLoading((old) => {return old + '.'});
        }, 500);
    }, []);

    return (
        <div className="">
        </div>
    );
};

export default Loading;
