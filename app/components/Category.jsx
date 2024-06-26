import { getHomeCategoryList } from "../services/getHomeCategoryList";
import { filterByHomePageTopMenu } from "../utils";
import { getHomeBrand } from "../services/getHomeBrand";
import Service from "./Service";
import SectionTitle from "./SectionTitle";
import ProductCategories from "./ProductCategories";
import JustForYou from "./JustForYou";

async function Category() {
    const serviceItems = [
        {
            imageurl: "/images/pickup.svg",
            altText: "pickup image",
            title: " Fast Delivery",
            subTitle: "Free For All Type Order",
        },
        {
            imageurl: "/images/gift-cart.svg",
            altText: "gift cart",
            title: " Best Quality",
            subTitle: "Best Product Peices",
        },
        {
            imageurl: "/images/gift-box.svg",
            altText: "gift box",
            title: " Exchange Offer",
            subTitle: "One Day To Changes",
        },
        {
            imageurl: "/images/headphone.svg",
            altText: "headphone",
            title: "  Help Center",
            subTitle: "Support System 24/7",
        },
    ];

    const categoryData = await getHomeCategoryList();
    const brandData = await getHomeBrand();

    const categoryProductData = filterByHomePageTopMenu(categoryData);
    const categoryBrandData = brandData?.results?.brands;

    return (
        <section className="nh-categories-area">
            <div className="container">
                <SectionTitle title="Categories" target="category" />
                <ProductCategories categoryProductData={categoryProductData} />

                <div className="nh-brands-area">
                    <SectionTitle title="Brands" target="brand" />
                    <ProductCategories
                        categoryProductData={categoryBrandData}
                    />
                </div>

                <JustForYou />

                <Service serviceItems={serviceItems} />
            </div>
        </section>
    );
}

export default Category;
