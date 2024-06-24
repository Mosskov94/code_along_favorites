import PageHeader from "../components/pageHeader/PageHeader";
import useFetchById from "../hooks/useFetchById";
import Favorites from "../components/favorites/Favorites";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import MyFavorites from "../components/myFavorites/MyFavorites";
import Newsletter from "../components/newsletter/Newsletter";

const Home = () => {

    const {recipe} = useFetchById(5);
   

    return (
        <section>


            <PageHeader
            title='Smagfulde Favoritter'
            subTitle='undertitel'
            headerImg={recipe?.image}/>

            <div className="section_header"><SectionHeader title='Brugerens favoritter'/></div>
            <Favorites/>
            <SectionHeader title='Mine favoritter'/>
            <MyFavorites/>
            <Newsletter/>


        </section>
    );
};

export default Home;