import {
    CardContainer,
    CardContent,
    CardCardContent,
    CardCard,
    CardIconContainer,
    CardIcon1,
    CardIcon2,
    CardIcon3,
    CardCardTitle,
    CardCardText
} from './CardStyled';


const Card = () => {
    return (
        <div>
            <CardContent>
                <CardContainer>
                    <CardCardContent>
                        <CardCard>
                            <CardIconContainer>
                                <CardIcon1 className="Icon"/>
                            </CardIconContainer>
                            <CardCardTitle>Descubra as possibilidades</CardCardTitle>
                            <CardCardText>
                                São vários produtos que permitem você escolher o que melhor se adapta as suas necessidades.
                            </CardCardText>
                        </CardCard>
                        <CardCard>
                            <CardIconContainer>
                                <CardIcon2/>
                            </CardIconContainer>
                            <CardCardTitle>Mostre-se</CardCardTitle>
                            <CardCardText>
                               São diferentes cores para você escolher a sua favorita e mostrar a sua personalidade.
                            </CardCardText>
                        </CardCard>
                        <CardCard>
                            <CardIconContainer>
                                <CardIcon3/>
                            </CardIconContainer>
                            <CardCardTitle>Frete grátis</CardCardTitle>
                            <CardCardText>
                                Para todos os produtos.
                            </CardCardText>
                        </CardCard>
                    </CardCardContent>
                </CardContainer>
            </CardContent>
        </div>
    )
}

export default Card;