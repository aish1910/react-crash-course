import React from "react";

function Card({username = "Aishwarya", designation="Not assigned yet", image="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=400"}) {
    // console.log(props)
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={image}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quibusdam reprehenderit distinctio quasi deserunt nam aperiam similique amet error nobis porro dolorem sed voluptatibus, exercitationem eligendi voluptas suscipit animi. Beatae?
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {designation}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
