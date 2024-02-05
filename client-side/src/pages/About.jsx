import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex justify-center my-10">
        <div className="max-w-2xl  p-3 text-center">
          <div>
            <h1 className="text-3xl font font-semibold text-center my-7">
              About Dev's Blog
            </h1>
            <div className="text-md text-[1.5rem] text-gray-500 flex flex-col gap-6">
              <p>
                Dive into the world of technology with Dev Arora, the creative
                force behind this tech-centric blog. Dev's passion for coding
                and all things tech shines through in every post.
              </p>

              <p>
                Explore insightful articles and tutorials on web development,
                software engineering, and various programming languages. Dev
                Arora ensures a steady stream of fresh and engaging content
                every week.
              </p>

              <p>
                Share your thoughts! Engage with our community through comments,
                likes, and replies. At Dev Arora's Tech Hub, we believe in
                collaborative learning, where everyone's input adds value.
                Embark on a journey of continuous learning and tech exploration
                with Dev Arora. Your presence is key to our vibrant community,
                and we're excited to learn and grow together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
