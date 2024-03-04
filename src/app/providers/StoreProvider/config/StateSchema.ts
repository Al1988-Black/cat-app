import { LikedSchema } from '../../../../entities/Liked';
import { CatSchema } from '../../../../entities/Cat';

export interface StateSchema {
    cat: CatSchema;
    liked: LikedSchema;
}
