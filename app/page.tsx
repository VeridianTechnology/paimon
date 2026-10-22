import Image from 'next/image';
import { FieldStatus, FeverPlayer } from './signed-off-controls';

function SleepingTurtle() {
  return (
    <figure className="turtle-scene">
      <Image
        src="/images/sleeping-turtle.png"
        alt="A little turtle dozing on its back in autumn grass, belly shell facing up"
        width="1536"
        height="1024"
        priority
        unoptimized
      />
      <span className="sleepy-z sleepy-z-one" aria-hidden="true">Z</span>
      <span className="sleepy-z sleepy-z-two" aria-hidden="true">Z</span>
      <span className="sleepy-z sleepy-z-three" aria-hidden="true">Z</span>
    </figure>
  );
}

export default function HomePage() {
  return (
    <main className="night-screen">
      <FieldStatus />
      <section className="signoff" aria-label="Signed off message">
        <h1>Signed Off till <span>12/24/2026</span></h1>
        <SleepingTurtle />
        <p>Have a blessed Fall</p>
      </section>
      <FeverPlayer />
    </main>
  );
}
