
type acb={
    avatarID:string;
}
const AvatarComponent = ({ avatarID } : acb) => {
  const size = "m"; // Kích thước ảnh
  const link = `https://i.imgur.com/${avatarID}${size}.jpg`;
  const imgStyle = {
    width:'70px',
    height:'70px',
    borderRadius:'50%'
};
  return (
    <div>
      <img src={link} alt={`Avatar ${avatarID}`} style={imgStyle}/>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <AvatarComponent avatarID="firstAvatarID" />
//       <AvatarComponent avatarID="secondAvatarID" />
//     </div>
//   );
// };

export default AvatarComponent;