// @ts-nocheck
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = Item & {
  __typename?: 'Album';
  albumType: AlbumType;
  artists: Array<Artist>;
  availableMarkets: Array<Scalars['String']>;
  externalUrls: ExternalUrls;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  releaseDate: Scalars['String'];
  releaseDatePrecision: DatePrecision;
  restrictions?: Maybe<Restrictions>;
  totalTracks: Scalars['Int'];
  type: ItemType;
  uri: Scalars['String'];
};

export enum AlbumType {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single'
}

export type Artist = Item & {
  __typename?: 'Artist';
  externalUrls: ExternalUrls;
  followers: Followers;
  genres: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  popularity: Scalars['Int'];
  type: ItemType;
  uri: Scalars['String'];
};

export type Copyright = {
  __typename?: 'Copyright';
  text: Scalars['String'];
  type: CopyrightType;
};

export enum CopyrightType {
  Copyright = 'copyright',
  Performance = 'performance'
}

export enum DatePrecision {
  Day = 'day',
  Month = 'month',
  Year = 'year'
}

export type ExternalIds = {
  __typename?: 'ExternalIds';
  ean?: Maybe<Scalars['String']>;
  isrc?: Maybe<Scalars['String']>;
  upc?: Maybe<Scalars['String']>;
};

export type ExternalUrls = {
  __typename?: 'ExternalUrls';
  spotify: Scalars['String'];
};

export type Followers = {
  __typename?: 'Followers';
  total: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  height: Scalars['Int'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Item = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: ItemType;
  uri: Scalars['String'];
};

export enum ItemType {
  Album = 'album',
  Artist = 'artist',
  Episode = 'episode',
  Show = 'show',
  Track = 'track'
}

export type LinkedFrom = {
  __typename?: 'LinkedFrom';
  album: Album;
  artists: Array<Artist>;
};

export type Pagination = {
  limit: Scalars['Int'];
  next: Scalars['Int'];
  offset: Scalars['Int'];
  previous: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  album: Album;
  albums: Array<Album>;
  artist?: Maybe<Artist>;
  artists: Array<Artist>;
  health: Scalars['Boolean'];
  track: Track;
  tracks: Array<Track>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
};


export type QueryAlbumsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryArtistsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
};


export type QueryTracksArgs = {
  ids: Array<Scalars['ID']>;
};

export enum RestrictionReason {
  Explicit = 'explicit',
  Market = 'market',
  Product = 'product'
}

export type Restrictions = {
  __typename?: 'Restrictions';
  reason: RestrictionReason;
};

export type ResumePoint = {
  __typename?: 'ResumePoint';
  fullyPlayed: Scalars['Boolean'];
  timestamp: Scalars['Int'];
};

export type Track = Item & {
  __typename?: 'Track';
  album: Album;
  availableMarkets: Array<Scalars['String']>;
  discNumber: Scalars['Int'];
  duration: Scalars['Int'];
  explicit: Scalars['Boolean'];
  externalIds: ExternalIds;
  id: Scalars['ID'];
  isLocal: Scalars['Boolean'];
  isPlayable?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<LinkedFrom>;
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  restrictions?: Maybe<Restrictions>;
  trackNumber: Scalars['Int'];
  type: ItemType;
  uri: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Album: ResolverTypeWrapper<Album>;
  AlbumType: AlbumType;
  Artist: ResolverTypeWrapper<Artist>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Copyright: ResolverTypeWrapper<Copyright>;
  CopyrightType: CopyrightType;
  DatePrecision: DatePrecision;
  ExternalIds: ResolverTypeWrapper<ExternalIds>;
  ExternalUrls: ResolverTypeWrapper<ExternalUrls>;
  Followers: ResolverTypeWrapper<Followers>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolversTypes['Album'] | ResolversTypes['Artist'] | ResolversTypes['Track'];
  ItemType: ItemType;
  LinkedFrom: ResolverTypeWrapper<LinkedFrom>;
  Pagination: never;
  Query: ResolverTypeWrapper<{}>;
  RestrictionReason: RestrictionReason;
  Restrictions: ResolverTypeWrapper<Restrictions>;
  ResumePoint: ResolverTypeWrapper<ResumePoint>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Track: ResolverTypeWrapper<Track>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album;
  Artist: Artist;
  Boolean: Scalars['Boolean'];
  Copyright: Copyright;
  ExternalIds: ExternalIds;
  ExternalUrls: ExternalUrls;
  Followers: Followers;
  ID: Scalars['ID'];
  Image: Image;
  Int: Scalars['Int'];
  Item: ResolversParentTypes['Album'] | ResolversParentTypes['Artist'] | ResolversParentTypes['Track'];
  LinkedFrom: LinkedFrom;
  Pagination: never;
  Query: {};
  Restrictions: Restrictions;
  ResumePoint: ResumePoint;
  String: Scalars['String'];
  Track: Track;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  albumType?: Resolver<ResolversTypes['AlbumType'], ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  availableMarkets?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDatePrecision?: Resolver<ResolversTypes['DatePrecision'], ParentType, ContextType>;
  restrictions?: Resolver<Maybe<ResolversTypes['Restrictions']>, ParentType, ContextType>;
  totalTracks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Followers'], ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CopyrightResolvers<ContextType = any, ParentType extends ResolversParentTypes['Copyright'] = ResolversParentTypes['Copyright']> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CopyrightType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalIdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalIds'] = ResolversParentTypes['ExternalIds']> = {
  ean?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExternalUrlsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExternalUrls'] = ResolversParentTypes['ExternalUrls']> = {
  spotify?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Followers'] = ResolversParentTypes['Followers']> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'Album' | 'Artist' | 'Track', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type LinkedFromResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkedFrom'] = ResolversParentTypes['LinkedFrom']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumsArgs, 'ids'>>;
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistArgs, 'id'>>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistsArgs, 'ids'>>;
  health?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<QueryTrackArgs, 'id'>>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType, RequireFields<QueryTracksArgs, 'ids'>>;
};

export type RestrictionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Restrictions'] = ResolversParentTypes['Restrictions']> = {
  reason?: Resolver<ResolversTypes['RestrictionReason'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResumePointResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResumePoint'] = ResolversParentTypes['ResumePoint']> = {
  fullyPlayed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType>;
  availableMarkets?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  discNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  explicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  externalIds?: Resolver<ResolversTypes['ExternalIds'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPlayable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['LinkedFrom']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  restrictions?: Resolver<Maybe<ResolversTypes['Restrictions']>, ParentType, ContextType>;
  trackNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  Copyright?: CopyrightResolvers<ContextType>;
  ExternalIds?: ExternalIdsResolvers<ContextType>;
  ExternalUrls?: ExternalUrlsResolvers<ContextType>;
  Followers?: FollowersResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  LinkedFrom?: LinkedFromResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Restrictions?: RestrictionsResolvers<ContextType>;
  ResumePoint?: ResumePointResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
};

