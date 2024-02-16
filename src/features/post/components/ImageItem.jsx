export default function ImageItem({ image }) {
  return (
    <div className="w-[400px] mx-auto">
      <img className="bg-clip-padding " src={image} alt="" />
    </div>
  );
}
