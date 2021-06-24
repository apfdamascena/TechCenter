import { ButtonWrapper, Container, MainContainer, UpperWrapper } from "./styles.js";
import React, { useEffect, useState } from 'react'

import API from "../../services/API"
import ArticleCard from "../ArticleCard";
import MEDIUM from "../../services/MEDIUM";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
};

export default function ArticlesCarousel() {
    const [articles, setArticles] = useState([]);
    const [text, setText] = useState("")

    useEffect(() => {
        async function fetchData() {
            MEDIUM.get("/@KonradDaWo").then(res => {
                setArticles(res.data.items)
            }
            ).catch(e => console.log(e))
        }

        async function fetchText() {
            await API.get("/article-text").then(res => {
                setText(res.data[0].Text)
            }).catch(e => console.log(e))
        }
        fetchData();
        fetchText();
    }, [])

    function toText(node) {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
    }

    function shortenText(text, startingPoint, maxLength) {
        return text.length > maxLength ?
            text.slice(startingPoint, maxLength) :
            text
    }

    return (
        <MainContainer>
            <UpperWrapper>
                <ButtonWrapper>
                    <hr size="7" width="20%" color="black" />
                    <p> Últimos artigos </p>
                    <button className="blueBtn">Saiba mais</button>
                </ButtonWrapper>
                <p className="right-text"> {text} </p>
            </UpperWrapper>
            <Container id="article-slider" >
                <Slider {...settings}>
                    {articles.map(e => (
                        <ArticleCard
                            key={e.guid}
                            guid={e.guid}
                            title={shortenText(e.title, 0, 30)}
                            content={shortenText(toText(e.content), 60, 120)}
                            thumbnail={e.thumbnail}
                        />
                    ))}
                </Slider>
            </Container>
        </MainContainer>
    )
}