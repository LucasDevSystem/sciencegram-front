import { useNavigate } from "react-router-dom";
import Feed from "./Feed";
import Stories from "./Stories";
const storiesData = [
  {
    imageUrl:
      "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",
    userName: "musk",
  },
  {
    imageUrl:
      "https://classic.exame.com/wp-content/uploads/2020/08/gettyimages-625137408-e1490022536452.jpg?quality=70&strip=info&w=1024",
    userName: "bill",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
    userName: "steve",
  },
];
const feedData = [
  {
    userName: "Elton musly",
    userImageUrl:
      "https://veja.abril.com.br/wp-content/uploads/2022/06/GettyImages-1395062612.jpg.jpg?quality=70&strip=info&resize=850,567",
    images: [
      "https://www.tnh1.com.br/fileadmin/_processed_/c/b/csm_Elon_Musk_-_Instagram_9d0167fccc.jpg",
    ],
    description: "roubaram nossos bitcoins",
    likes: 0,
    comments: [
      { userName: "jhon saints", comment: "i thinks this not solve my prob" },
      { userName: "elton muskison", comment: "o man thks" },
      { userName: "jhony", comment: "love u" },
    ],
    createdAt: "10/05/2023",
  },
  {
    userName: "bill",
    userImageUrl:
      "https://classic.exame.com/wp-content/uploads/2020/08/gettyimages-625137408-e1490022536452.jpg?quality=70&strip=info&w=1024",
    images: ["https://i.insider.com/5d51e4e6cd9784689e26acff?width=1206"],
    description: "bilo gaton e seu frango",
    likes: 0,
    comments: [],
    createdAt: "10/05/2023",
  },
  {
    userName: "tio nelson",
    userImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
    images: [
      "https://www.tnh1.com.br/fileadmin/_processed_/c/b/csm_Elon_Musk_-_Instagram_9d0167fccc.jpg",
    ],
    description: "roubaram nossos bitcoins",
    likes: 0,
    isLiked: true,
    comments: [],
    createdAt: "10/05/2023",
  },
];
function HomePage() {
  const navigate = useNavigate();

  const onNavigate = (user) => {
    navigate("../profile/" + user);
  };
  return (
    <div>
      <Stories storiesData={storiesData}></Stories>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Feed feedData={feedData} onNavigate={onNavigate}></Feed>
      </div>
    </div>
  );
}

export default HomePage;
