import React,{useState,useEffect,useRef} from 'react';
import CustomText from '../global/CustomText';
import '../../styles/ListItem.css'
import { API_URL } from '../../constant/enum';
import { addDefaultSrc } from '../../utils/helper';
import Loader from '../global/Loader';

const ListItem = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current);
                }
            });
        }, {
            threshold: 0.1
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref}>
            {isVisible ? (
                <div className='flex flex-col gap-3'>
                    <img src={`${API_URL?.BASE_URL}images/${data?.['poster-image']}`} onError={addDefaultSrc} alt={data?.name || "movie poster"} className='list__image' />
                    <CustomText title={data?.name || 'Movie name'} className='text-xl text-white leading-normal tracking-normal font-extraLight' />
                </div>
            ) : (
                <Loader />
            )}

        </div>
    )
}

export default ListItem