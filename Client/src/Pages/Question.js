import DouglasHurleyImage from '../Assets/crew/image-douglas-hurley.webp';
import AnoushehAnsariImage from '../Assets/crew/image-anousheh-ansari.webp';
import MarkShuttleworthImage from '../Assets/crew/image-mark-shuttleworth.webp';
import VictorGloverImage from '../Assets/crew/image-victor-glover.webp';
import styles from '../Styles/Crew.module.scss';
import { useState } from 'react';

export function Crew({ data }) {
    const [selectedCrewMember, setSelectedCrewMember] = useState(data[0]);

    const [image, setImage] = useState(DouglasHurleyImage);

    const [isActive, setIsActive] = useState(0);

    return (
        <section>
        
        </section>
    )
}