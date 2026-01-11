import { Star } from 'lucide-react';
import { Heart } from 'lucide-react';
import { MapPin } from 'lucide-react';

function Card({ recipes })
{
    return (
        <>
            {recipes.map((item, index) =>
            {
                return (
                    <div className="card" key={index}>
                        <div className="top">
                            <img src={item.image} alt="Image" />
                        </div>
                        <div className="center">
                            <h3 className='title'>{item.recipeName}</h3>
                            <div className="details">
                                <div className="more-details">
                                    <Star size={15} color="#0787a6" />
                                    <Star size={15} color="#0787a6" />
                                    <Star size={15} color="#0787a6" />
                                    <Star size={15} color="#0787a6" />
                                    <span className='comments'>{item.commentsCount} Comment's</span>
                                </div>
                                <div className='like'>
                                    <Heart size={30} color="#0787a6" />
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="location"><MapPin size={16} color="#48575b" absoluteStrokeWidth />{item.location}</div>
                            <span className="price">${item.price}</span>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default Card;