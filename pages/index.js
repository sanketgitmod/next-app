import Alert from "@mui/material/Alert";
import Head from "next/head";
import Food from "../components/Food/Food";
import connect from "../lib/db";
import Foods from "../models/food";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>food app</title>
      </Head>
      {props.foodList.length === 0 && (
        <Alert
          sx={{ justifyContent: "center", marginTop: 7, padding: 7 }}
          variant="outlined"
          severity="info"
        >
          N/A
        </Alert>
      )}

      <Food food={props.foodList} />
    </>
  );
}

export async function getStaticProps() {
  await connect();

  const result = await Foods.find();

  const FoodItems = result.map((food) => {
    return {
      id: food._id.toString(),
      name: food.name,
      description: food.description,
      price: food.price,
      imageUrl: food.imageUrl,
    };
  });
  return {
    props: {
      foodList: FoodItems,
    },
    revalidate: 1,
  };
}
