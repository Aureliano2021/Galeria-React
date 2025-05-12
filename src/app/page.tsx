import { Image2 } from "@/components/Image2";
const Page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-4">Image Gallery</h1>
      <div className="container mx-auto px-32 justify-center items-center">
        <Image2/>
      </div>
      <footer>Criado por <a href="https://aureliano-oliveira.vercel.app/" className="text-blue-500 text-sm">Aureliano Amorim</a></footer>
    </>
  )
}

export default Page