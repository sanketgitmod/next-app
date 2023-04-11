import { useRouter } from "next/router";
import Head from "next/head";
import AddFoodForm from "../../components/FoodForm/AddFoodForm";

export default function AddFood() {
  const router = useRouter();
  const hadndleAddFood = async (food) => {
    await fetch("/api/add-food", {
      method: "POST",
      body: JSON.stringify(food),
      headers: {
        "Content-type": "application/json",
      },
    });
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>add food</title>
      </Head>
      <AddFoodForm onAddFood={hadndleAddFood} />
    </>
  );
}
