import Head from "next/head";
import FoodDetails from "../../components/FoodDetails/FoodDetails";
import connect from "../../lib/db";
import Foods from "../../models/food";

export default function Food(props) {
  return (
    <>
      <Head>
        <title>{props.food.name}</title>
      </Head>
      <FoodDetails f={props.food} />{" "}
    </>
  );
}

export async function getStaticPaths() {
  await connect();

  const result = await Foods.find({}, { _id: 1 });

  const urls = result.map((food) => ({
    params: { foodId: food._id.toString() },
  }));

  return {
    fallback: "blocking",
    paths: urls,
  };
}

export async function getStaticProps(context) {
  const foodId = context.params.foodId;

  const food = await Foods.findOne({ _id: foodId });

  return {
    props: {
      food: {
        id: food._id.toString(),
        name: food.name,
        description: food.description,
        price: food.price,
        imageUrl: food.imageUrl,
      },
    },
  };
}
