import { useCallback, useEffect, useState } from 'react';
import { OfferSection } from '../../../widgets/OfferSection';
import { PhotoSection } from '../../../widgets/PhotoSection';
import { DescriptionSection } from '../../../widgets/DescriptionSection';
import { ButtonSection } from '../../../widgets/ButtonSection';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchCatData,
    getCatData,
    getCatError,
    getCatIsLoading,
} from '../../../entities/Cat';
import { useSelector } from 'react-redux';
import {
    getLikedData,
    getLikedError,
    getLikedIsLoading,
    likedActions,
    likedCat,
} from '../../../entities/Liked';
import { AppLoader } from '../../../shared/ui/AppLoader/AppLoader';
import { Text, TextTheme } from '../../../shared/ui/Text/Text';

const MainPage = () => {
    const [catId, setCatId] = useState(1);
    const dispatch = useAppDispatch();

    const onNext = useCallback(() => {
        if (catId < 5) {
            dispatch(likedActions.deleteLiked());
            setCatId((prev) => prev + 1);
        } else {
            dispatch(likedActions.deleteLiked());
            setCatId(1);
        }
    }, [dispatch, catId]);

    useEffect(() => {
        dispatch(fetchCatData(catId.toString()));
    }, [catId, dispatch]);

    const catData = useSelector(getCatData);
    const isLoadingCat = useSelector(getCatIsLoading);
    const ErrorCat = useSelector(getCatError);

    const Liked = useSelector(getLikedData);
    const isLoadindLiked = useSelector(getLikedIsLoading);
    const ErrorLiked = useSelector(getLikedError);

    const onLike = () => {
        dispatch(likedCat(catId.toString()));
    };

    if (isLoadindLiked || isLoadingCat) return <AppLoader />;

    if (ErrorCat || ErrorLiked)
        return <Text title="Произошла ошибка" theme={TextTheme.ERROR} />;

    return (
        <>
            <OfferSection
                name={catData?.name}
                breed={catData?.breed}
                image={catData?.image}
            />
            <PhotoSection image={catData?.image} />
            <DescriptionSection
                name={catData?.name}
                habit={catData?.habit}
                description={catData?.description}
            />
            <ButtonSection
                onNext={onNext}
                onLike={onLike}
                isNotliked={Liked?.liked}
            />
        </>
    );
};

export default MainPage;
