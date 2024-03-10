import React from 'react';

function Degree({
  start,
  end,
  college,
  place,
  university,
  degree,
  stream,
  grade,
  image,
}) {
  return (
    <div>
      <span>{start}</span>
      <span>{end}</span>
      <span>{college}</span>
      <span>{place}</span>
      <span>{university}</span>
      <span>{degree}</span>
      <span>{stream}</span>
      <span>{grade}</span>
      <Image src={image} width='50' height='50' alt={degree} />
    </div>
  );
}

export default Degree;
