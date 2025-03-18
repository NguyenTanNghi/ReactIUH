import { summer } from "../../data.js";

export default function MainContent() {
  return (
    <div>
      <div className="container">
        <h2 className="title">This Summer Recipes</h2>
        <p className="description">
          We have all your Independence Day sweets covered.
        </p>
        <ul className="main-content">
          {summer
            .filter((item) => item.type === "This Summer Recipes")
            .map((item) => (
              <li className="recipe-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="recipe-image"
                />
                <div className="recipe-info">
                  <p className="recipe-title">{item.title}</p>
                  <img
                    src="./Lab_02_b/Icon Button 73.png"
                    alt="Favorite Icon"
                    className="favorite-icon"
                  />
                </div>
                <span className="recipe-time">{item.time} minutes</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="container">
        <h2 className="title">Recipes With Videos</h2>
        <p className="description">
          Cooking Up Culinary Creations with Step-by-Step Videos
        </p>
        <ul className="main-content">
          {summer
            .filter((item) => item.type === "Recipes With Videos")
            .map((item) => (
              <li className="recipe-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="recipe-image"
                />
                <div className="recipe-info">
                  <p className="recipe-title">{item.title}</p>
                  <img
                    src="./Lab_02_b/Icon Button 73.png"
                    alt="Favorite Icon"
                    className="favorite-icon"
                  />
                </div>
                <span className="recipe-time">{item.time} minutes</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="editor-pick-container">
        <h2 className="title">Editor's pick</h2>
        <p className="description">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
        <div className="editor-content grid grid-cols-2 gap-4">
          {summer
            .filter((item) => item.type === "Editor's pick")
            .slice(0, 4)
            .map((item) => (
              <div className="recipe-item editor" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="recipe-image editorimage"
                />
                <div>
                  <div className="recipe-info">
                    <p className="recipe-title">{item.title}</p>
                    <img
                      src="./Lab_02_b/Icon Button 73.png"
                      alt="Favorite Icon"
                      className="favorite-icon"
                    />
                  </div>
                  <span className="recipe-time">{item.time} minutes</span>
                  <div>
                    <img src={item.imageEdittor} alt="" className="editor-avatar"/>
                    <span>{item.nameEditor}</span>
                  </div>
                  <span className="recipe-description">{item.description}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
