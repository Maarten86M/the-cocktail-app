import React, {useEffect} from "react";
import HelpSection from "../../Components/HelpSection/HelpSection";
import {useCocktailContext} from "../../Context/CocktailContext";
import MainBackButton from "../../Components/Buttons/MainBackButton/MainBackButton";
import PageTitle from "../../Components/PageTitle/PageTitle";
import helpImg from '../../Assets/Logo/App-Logo-color.png';
import '../../App.css';
import './Help.css';

function Help() {
    const {setPageTitle} = useCocktailContext();

    useEffect(() => {
        setPageTitle("Help");
    }, [])

    return (
        <main className="fullpage-container">
            <article className="help-box">
                <PageTitle title="Help"/>
                <HelpSection helpimg={helpImg} styling="leftalign"
                             helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam dignissimos dolorum est hic
                    maiores numquam optio quia reiciendis! Aperiam cum debitis dignissimos error expedita harum ipsum
                    laborum minima molestiae nesciunt nostrum, officia quia reprehenderit, saepe sed sit sunt totam
                    veniam! Accusantium, aliquid amet architecto assumenda blanditiis consectetur culpa, delectus dolor
                    doloremque esse eveniet fugit harum impedit labore maiores minus molestias mollitia natus non, nulla
                    odio officiis placeat quidem saepe sed sunt suscipit tenetur totam ullam unde ut voluptas
                    voluptatibus voluptatum. Asperiores at earum incidunt quae ratione unde voluptate! Corporis dolor
                    fugit illum, laborum nesciunt nisi possimus rem similique temporibus voluptatibus! Alias aliquam
                    deleniti deserunt ea eligendi error expedita illum inventore iusto laboriosam laborum maxime
                    nesciunt nisi officia optio, porro similique voluptates. Alias amet commodi dolorem facilis
                    molestiae necessitatibus nobis placeat quam! Architecto at consequatur eligendi id nihil pariatur
                    reiciendis sequi tempora! Ea eius eos eveniet fugiat hic illum, incidunt molestiae perferendis
                    placeat quod quos recusandae reprehenderit sapiente vel vitae voluptatem, voluptates! A aliquam
                    beatae commodi doloremque eaque eum id iusto labore magnam minima quia, quis repellendus soluta, ut
                    vero? Beatae consectetur consequatur dolores, ea laboriosam perspiciatis praesentium quae quaerat,
                    quis reiciendis repellat veniam, veritatis! Alias dolorum molestias perferendis vel!"
                />

                <HelpSection helpimg={helpImg} styling="rightalign" helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam dignissimos dolorum est hic
                    maiores numquam optio quia reiciendis! Aperiam cum debitis dignissimos error expedita harum ipsum
                    laborum minima molestiae nesciunt nostrum, officia quia reprehenderit, saepe sed sit sunt totam
                    veniam! Accusantium, aliquid amet architecto assumenda blanditiis consectetur culpa, delectus dolor
                    doloremque esse eveniet fugit harum impedit labore maiores minus molestias mollitia natus non, nulla
                    odio officiis placeat quidem saepe sed sunt suscipit tenetur totam ullam unde ut voluptas
                    voluptatibus voluptatum. Asperiores at earum incidunt quae ratione unde voluptate! Corporis dolor
                    fugit illum, laborum nesciunt nisi possimus rem similique temporibus voluptatibus! Alias aliquam
                    deleniti deserunt ea eligendi error expedita illum inventore iusto laboriosam laborum maxime
                    nesciunt nisi officia optio, porro similique voluptates. Alias amet commodi dolorem facilis
                    molestiae necessitatibus nobis placeat quam! Architecto at consequatur eligendi id nihil pariatur
                    reiciendis sequi tempora! Ea eius eos eveniet fugiat hic illum, incidunt molestiae perferendis
                    placeat quod quos recusandae reprehenderit sapiente vel vitae voluptatem, voluptates! A aliquam
                    beatae commodi doloremque eaque eum id iusto labore magnam minima quia, quis repellendus soluta, ut
                    vero? Beatae consectetur consequatur dolores, ea laboriosam perspiciatis praesentium quae quaerat,
                    quis reiciendis repellat veniam, veritatis! Alias dolorum molestias perferendis vel!"/>

                <HelpSection helpimg={helpImg} styling="leftalign"
                             helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam dignissimos dolorum est hic
                    maiores numquam optio quia reiciendis! Aperiam cum debitis dignissimos error expedita harum ipsum
                    laborum minima molestiae nesciunt nostrum, officia quia reprehenderit, saepe sed sit sunt totam
                    veniam! Accusantium, aliquid amet architecto assumenda blanditiis consectetur culpa, delectus dolor
                    doloremque esse eveniet fugit harum impedit labore maiores minus molestias mollitia natus non, nulla
                    odio officiis placeat quidem saepe sed sunt suscipit tenetur totam ullam unde ut voluptas
                    voluptatibus voluptatum. Asperiores at earum incidunt quae ratione unde voluptate! Corporis dolor
                    fugit illum, laborum nesciunt nisi possimus rem similique temporibus voluptatibus! Alias aliquam
                    deleniti deserunt ea eligendi error expedita illum inventore iusto laboriosam laborum maxime
                    nesciunt nisi officia optio, porro similique voluptates. Alias amet commodi dolorem facilis
                    molestiae necessitatibus nobis placeat quam! Architecto at consequatur eligendi id nihil pariatur
                    reiciendis sequi tempora! Ea eius eos eveniet fugiat hic illum, incidunt molestiae perferendis
                    placeat quod quos recusandae reprehenderit sapiente vel vitae voluptatem, voluptates! A aliquam
                    beatae commodi doloremque eaque eum id iusto labore magnam minima quia, quis repellendus soluta, ut
                    vero? Beatae consectetur consequatur dolores, ea laboriosam perspiciatis praesentium quae quaerat,
                    quis reiciendis repellat veniam, veritatis! Alias dolorum molestias perferendis vel!"
                />
                <HelpSection helpimg={helpImg} styling="rightalign" helpText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam dignissimos dolorum est hic
                    maiores numquam optio quia reiciendis! Aperiam cum debitis dignissimos error expedita harum ipsum
                    laborum minima molestiae nesciunt nostrum, officia quia reprehenderit, saepe sed sit sunt totam
                    veniam! Accusantium, aliquid amet architecto assumenda blanditiis consectetur culpa, delectus dolor
                    doloremque esse eveniet fugit harum impedit labore maiores minus molestias mollitia natus non, nulla
                    odio officiis placeat quidem saepe sed sunt suscipit tenetur totam ullam unde ut voluptas
                    voluptatibus voluptatum. Asperiores at earum incidunt quae ratione unde voluptate! Corporis dolor
                    fugit illum, laborum nesciunt nisi possimus rem similique temporibus voluptatibus! Alias aliquam
                    deleniti deserunt ea eligendi error expedita illum inventore iusto laboriosam laborum maxime
                    nesciunt nisi officia optio, porro similique voluptates. Alias amet commodi dolorem facilis
                    molestiae necessitatibus nobis placeat quam! Architecto at consequatur eligendi id nihil pariatur
                    reiciendis sequi tempora! Ea eius eos eveniet fugiat hic illum, incidunt molestiae perferendis
                    placeat quod quos recusandae reprehenderit sapiente vel vitae voluptatem, voluptates! A aliquam
                    beatae commodi doloremque eaque eum id iusto labore magnam minima quia, quis repellendus soluta, ut
                    vero? Beatae consectetur consequatur dolores, ea laboriosam perspiciatis praesentium quae quaerat,
                    quis reiciendis repellat veniam, veritatis! Alias dolorum molestias perferendis vel!"/>

                <div className="help-footer-button">
                    <MainBackButton/>
                </div>
            </article>
        </main>
    )
}

export default Help;