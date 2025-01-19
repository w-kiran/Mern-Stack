import client from "@/db"

async function getUserData() {
  try{
    const user = await client.user.findFirst({});
    return {
        name: "kiranjs",
        username : user?.username,
    }
  }catch(e){
    console.log(e);
  }
}

export default async function User() {
  const userDetails = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails?.name}</div>
          <div>{userDetails?.username}</div>
        </div>
      </div>
    </div>
  );
}
