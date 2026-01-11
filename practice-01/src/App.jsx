import Card from "./components/Card";
import './App.css';

const App = () =>
{
    const recipes = [
        {
            recipeName: "Margherita Pizza",
            image: "https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg",
            stars: 4.5,
            commentsCount: 320,
            location: "Jakarta, Indonesia",
            price: 12.99
        },
        {
            recipeName: "Creamy Alfredo Pasta",
            image: "https://www.allrecipes.com/thmb/ziUOvj4f_me5yvZhYCUy0n4IKbQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/276725-creamy-chicken-alfredo-VAT-001-Beauty-4x3-c4b026db5cb349f4b8fd627c56f91a42.jpg",
            stars: 4.2,
            commentsCount: 210,
            location: "Bandung, Indonesia",
            price: 10.5
        },
        {
            recipeName: "Classic Beef Burger",
            image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger-1200x675.jpg",
            stars: 4.7,
            commentsCount: 540,
            location: "Bali, Indonesia",
            price: 9.99
        },
        {
            recipeName: "Chicken Sushi Roll",
            image: "https://yummylavender.de/wp-content/uploads/2025/04/crispy-sushi-rolls-mit-teriyaki-chicken-2.jpg",
            stars: 4.3,
            commentsCount: 180,
            location: "Surabaya, Indonesia",
            price: 14.25
        },
        {
            recipeName: "Spicy Ramen Bowl",
            image: "https://ayokitchen.com/wp-content/uploads/2022/06/AYoKitchenTanTanRamen-41.jpg",
            stars: 4.6,
            commentsCount: 400,
            location: "Yogyakarta, Indonesia",
            price: 11.75
        }
    ];

    return (
        <>
            <div className="parent">
                <Card recipes={recipes} />
                {/* {recipes.map(function (cartItems)
                {
                    return (
                        // <Card name={elem.recipeName} comments={elem.commentsCount} location={elem.location} price={elem.price} image={elem.image} />
                        // <Card {...elem} />
                        <Card receipe={cartItems} />
                    )
                })} */}
            </div>
        </>
    )
}

export default App;