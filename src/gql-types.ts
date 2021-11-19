// @ts-nocheck
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  availableMarkets?: Maybe<Array<Scalars['String']>>;
  externalUrls: ExternalUrls;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  releaseDate: Scalars['String'];
  releaseDatePrecision: DatePrecision;
  restrictions?: Maybe<Restrictions>;
  totalTracks: Scalars['Int'];
  tracks: Tracks;
  type: ItemType;
  uri: Scalars['String'];
};


export type AlbumTracksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  market?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export enum AlbumType {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single'
}

export type Albums = Pagination & {
  __typename?: 'Albums';
  albums: Array<Album>;
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type Artist = Item & {
  __typename?: 'Artist';
  albums: Albums;
  externalUrls: ExternalUrls;
  followers: Followers;
  genres: Array<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  popularity: Scalars['Int'];
  relatedArtists: RelatedArtists;
  topTracks: TopTracks;
  type: ItemType;
  uri: Scalars['String'];
};


export type ArtistAlbumsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  market?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ArtistTopTracksArgs = {
  market: Scalars['String'];
};

export type Artists = Pagination & {
  __typename?: 'Artists';
  artists: Array<Artist>;
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type AudioFeatures = {
  __typename?: 'AudioFeatures';
  acousticness: Scalars['Float'];
  danceability: Scalars['Float'];
  duration: Scalars['Int'];
  energy: Scalars['Float'];
  instrumentalness: Scalars['Float'];
  key: Scalars['Int'];
  liveness: Scalars['Float'];
  loudness: Scalars['Float'];
  mode: Scalars['Int'];
  speechiness: Scalars['Float'];
  temp?: Maybe<Scalars['Float']>;
  timeSignature: Scalars['Int'];
  type: Scalars['String'];
  valence: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  icons: Array<Image>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CategoryPage = Pagination & {
  __typename?: 'CategoryPage';
  categories: Array<Category>;
  limit: Scalars['Int'];
  next: Scalars['Int'];
  offset: Scalars['Int'];
  previous: Scalars['Int'];
  total: Scalars['Int'];
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

export type ExplicitContentSettings = {
  __typename?: 'ExplicitContentSettings';
  filterEnabled: Scalars['Boolean'];
  filterLocked: Scalars['Boolean'];
};

export type ExternalIds = {
  __typename?: 'ExternalIds';
  /** International Article Number */
  ean?: Maybe<Scalars['String']>;
  /** International Standard Recording Code */
  isrc?: Maybe<Scalars['String']>;
  /** Universal Product Code */
  upc?: Maybe<Scalars['String']>;
};

export type ExternalUrls = {
  __typename?: 'ExternalUrls';
  /** the Spotify URL for the current object */
  spotify: Scalars['String'];
};

export type Followers = {
  __typename?: 'Followers';
  total: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Item = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: ItemType;
  uri: Scalars['String'];
};

/**
 * Represents the types that can be returned from
 * a search
 */
export enum ItemType {
  Album = 'album',
  Artist = 'artist',
  Track = 'track'
}

export type LinkedFrom = {
  __typename?: 'LinkedFrom';
  album: Album;
  artists: Array<Artist>;
};

export type Me = User & {
  __typename?: 'Me';
  country?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  explicitContent?: Maybe<ExplicitContentSettings>;
  externalUrls: ExternalUrls;
  followers: Followers;
  id: Scalars['ID'];
  images: Array<Image>;
  playlists: Playlists;
  product?: Maybe<Scalars['String']>;
  topArtists: Artists;
  topTracks: Tracks;
  type: ObjectType;
  uri: Scalars['String'];
};


export type MePlaylistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type MeTopArtistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  timeRange?: InputMaybe<TimeRange>;
};


export type MeTopTracksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  timeRange?: InputMaybe<TimeRange>;
};

/**
 * Represents any object that is not
 * a searchable object
 */
export enum ObjectType {
  Playlist = 'playlist',
  User = 'user'
}

export type Pagination = {
  limit: Scalars['Int'];
  /**
   * The next offset for pagination, returns null if no more
   * items are available
   */
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  /**
   * The previous offset for pagination, returns null if no
   * items precede the current list
   */
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type Playlist = {
  __typename?: 'Playlist';
  collaborative: Scalars['Boolean'];
  description: Scalars['String'];
  externalUrls: ExternalUrls;
  followers: Followers;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  owner: UserProfile;
  public: Scalars['Boolean'];
  snapshotId: Scalars['String'];
  tracks: PlaylistTracks;
  type: ObjectType;
  uri: Scalars['String'];
};


export type PlaylistTracksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  market?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type PlaylistTrack = {
  __typename?: 'PlaylistTrack';
  addedAt?: Maybe<Scalars['String']>;
  addedBy: UserProfile;
  isLocal: Scalars['Boolean'];
  primaryColor?: Maybe<Scalars['String']>;
  track: Track;
};

export type PlaylistTracks = Pagination & {
  __typename?: 'PlaylistTracks';
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  tracks: Array<PlaylistTrack>;
};

export type Playlists = Pagination & {
  __typename?: 'Playlists';
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  playlists: Array<Playlist>;
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  album: Album;
  albums: Array<Album>;
  artist?: Maybe<Artist>;
  artists: Array<Artist>;
  categories: CategoryPage;
  category?: Maybe<Category>;
  genres: Array<Scalars['String']>;
  markets: Array<Scalars['String']>;
  me: Me;
  newReleases: Albums;
  playlist?: Maybe<Playlist>;
  search?: Maybe<Search>;
  searchAlbums: Albums;
  searchArtists: Artists;
  searchTracks: Tracks;
  track: Track;
  tracks: Array<Track>;
  user: UserProfile;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
  market?: InputMaybe<Scalars['String']>;
};


export type QueryAlbumsArgs = {
  ids: Array<Scalars['ID']>;
  market?: InputMaybe<Scalars['String']>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryArtistsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryCategoriesArgs = {
  country?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  country?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryNewReleasesArgs = {
  country?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPlaylistArgs = {
  id: Scalars['ID'];
  market?: InputMaybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  includeExternal?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  market?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
  type: Array<ItemType>;
};


export type QuerySearchAlbumsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  market?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchArtistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  market?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QuerySearchTracksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  market?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
  market?: InputMaybe<Scalars['String']>;
};


export type QueryTracksArgs = {
  ids: Array<Scalars['ID']>;
  market?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};

export type RelatedArtists = {
  __typename?: 'RelatedArtists';
  artists: Array<Artist>;
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

export type Search = {
  __typename?: 'Search';
  album?: Maybe<Albums>;
  artists?: Maybe<Artists>;
  tracks?: Maybe<Tracks>;
};

export enum TimeRange {
  LongTerm = 'longTerm',
  MediumTerm = 'mediumTerm',
  ShortTerm = 'shortTerm'
}

export type TopTracks = {
  __typename?: 'TopTracks';
  tracks: Array<Track>;
};

export type Track = Item & {
  __typename?: 'Track';
  album: Album;
  artists: Array<Artist>;
  audioFeatures: AudioFeatures;
  availableMarkets?: Maybe<Array<Scalars['String']>>;
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

export type Tracks = Pagination & {
  __typename?: 'Tracks';
  limit: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  previous?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  tracks: Array<Track>;
};

export type User = {
  displayName: Scalars['String'];
  externalUrls: ExternalUrls;
  followers: Followers;
  id: Scalars['ID'];
  images: Array<Image>;
  type: ObjectType;
  uri: Scalars['String'];
};

export type UserProfile = User & {
  __typename?: 'UserProfile';
  displayName: Scalars['String'];
  externalUrls: ExternalUrls;
  followers: Followers;
  id: Scalars['ID'];
  images: Array<Image>;
  playlists: Playlists;
  type: ObjectType;
  uri: Scalars['String'];
};


export type UserProfilePlaylistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
  Albums: ResolverTypeWrapper<Albums>;
  Artist: ResolverTypeWrapper<Artist>;
  Artists: ResolverTypeWrapper<Artists>;
  AudioFeatures: ResolverTypeWrapper<AudioFeatures>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryPage: ResolverTypeWrapper<CategoryPage>;
  CopyrightType: CopyrightType;
  DatePrecision: DatePrecision;
  ExplicitContentSettings: ResolverTypeWrapper<ExplicitContentSettings>;
  ExternalIds: ResolverTypeWrapper<ExternalIds>;
  ExternalUrls: ResolverTypeWrapper<ExternalUrls>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Followers: ResolverTypeWrapper<Followers>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolversTypes['Album'] | ResolversTypes['Artist'] | ResolversTypes['Track'];
  ItemType: ItemType;
  LinkedFrom: ResolverTypeWrapper<LinkedFrom>;
  Me: ResolverTypeWrapper<Me>;
  ObjectType: ObjectType;
  Pagination: ResolversTypes['Albums'] | ResolversTypes['Artists'] | ResolversTypes['CategoryPage'] | ResolversTypes['PlaylistTracks'] | ResolversTypes['Playlists'] | ResolversTypes['Tracks'];
  Playlist: ResolverTypeWrapper<Playlist>;
  PlaylistTrack: ResolverTypeWrapper<PlaylistTrack>;
  PlaylistTracks: ResolverTypeWrapper<PlaylistTracks>;
  Playlists: ResolverTypeWrapper<Playlists>;
  Query: ResolverTypeWrapper<{}>;
  RelatedArtists: ResolverTypeWrapper<RelatedArtists>;
  RestrictionReason: RestrictionReason;
  Restrictions: ResolverTypeWrapper<Restrictions>;
  Search: ResolverTypeWrapper<Search>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TimeRange: TimeRange;
  TopTracks: ResolverTypeWrapper<TopTracks>;
  Track: ResolverTypeWrapper<Track>;
  Tracks: ResolverTypeWrapper<Tracks>;
  User: ResolversTypes['Me'] | ResolversTypes['UserProfile'];
  UserProfile: ResolverTypeWrapper<UserProfile>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album;
  Albums: Albums;
  Artist: Artist;
  Artists: Artists;
  AudioFeatures: AudioFeatures;
  Boolean: Scalars['Boolean'];
  Category: Category;
  CategoryPage: CategoryPage;
  ExplicitContentSettings: ExplicitContentSettings;
  ExternalIds: ExternalIds;
  ExternalUrls: ExternalUrls;
  Float: Scalars['Float'];
  Followers: Followers;
  ID: Scalars['ID'];
  Image: Image;
  Int: Scalars['Int'];
  Item: ResolversParentTypes['Album'] | ResolversParentTypes['Artist'] | ResolversParentTypes['Track'];
  LinkedFrom: LinkedFrom;
  Me: Me;
  Pagination: ResolversParentTypes['Albums'] | ResolversParentTypes['Artists'] | ResolversParentTypes['CategoryPage'] | ResolversParentTypes['PlaylistTracks'] | ResolversParentTypes['Playlists'] | ResolversParentTypes['Tracks'];
  Playlist: Playlist;
  PlaylistTrack: PlaylistTrack;
  PlaylistTracks: PlaylistTracks;
  Playlists: Playlists;
  Query: {};
  RelatedArtists: RelatedArtists;
  Restrictions: Restrictions;
  Search: Search;
  String: Scalars['String'];
  TopTracks: TopTracks;
  Track: Track;
  Tracks: Tracks;
  User: ResolversParentTypes['Me'] | ResolversParentTypes['UserProfile'];
  UserProfile: UserProfile;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  albumType?: Resolver<ResolversTypes['AlbumType'], ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  availableMarkets?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDatePrecision?: Resolver<ResolversTypes['DatePrecision'], ParentType, ContextType>;
  restrictions?: Resolver<Maybe<ResolversTypes['Restrictions']>, ParentType, ContextType>;
  totalTracks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracks?: Resolver<ResolversTypes['Tracks'], ParentType, ContextType, RequireFields<AlbumTracksArgs, never>>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Albums'] = ResolversParentTypes['Albums']> = {
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  albums?: Resolver<ResolversTypes['Albums'], ParentType, ContextType, RequireFields<ArtistAlbumsArgs, never>>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Followers'], ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relatedArtists?: Resolver<ResolversTypes['RelatedArtists'], ParentType, ContextType>;
  topTracks?: Resolver<ResolversTypes['TopTracks'], ParentType, ContextType, RequireFields<ArtistTopTracksArgs, 'market'>>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artists'] = ResolversParentTypes['Artists']> = {
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AudioFeaturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['AudioFeatures'] = ResolversParentTypes['AudioFeatures']> = {
  acousticness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  danceability?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  energy?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  instrumentalness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  liveness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  loudness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  speechiness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  temp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timeSignature?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valence?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  icons?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryPage'] = ResolversParentTypes['CategoryPage']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExplicitContentSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExplicitContentSettings'] = ResolversParentTypes['ExplicitContentSettings']> = {
  filterEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  filterLocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
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
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  explicitContent?: Resolver<Maybe<ResolversTypes['ExplicitContentSettings']>, ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Followers'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  playlists?: Resolver<ResolversTypes['Playlists'], ParentType, ContextType, RequireFields<MePlaylistsArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topArtists?: Resolver<ResolversTypes['Artists'], ParentType, ContextType, RequireFields<MeTopArtistsArgs, never>>;
  topTracks?: Resolver<ResolversTypes['Tracks'], ParentType, ContextType, RequireFields<MeTopTracksArgs, never>>;
  type?: Resolver<ResolversTypes['ObjectType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  __resolveType: TypeResolveFn<'Albums' | 'Artists' | 'CategoryPage' | 'PlaylistTracks' | 'Playlists' | 'Tracks', ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type PlaylistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  collaborative?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Followers'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType>;
  public?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  snapshotId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tracks?: Resolver<ResolversTypes['PlaylistTracks'], ParentType, ContextType, RequireFields<PlaylistTracksArgs, never>>;
  type?: Resolver<ResolversTypes['ObjectType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaylistTrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistTrack'] = ResolversParentTypes['PlaylistTrack']> = {
  addedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addedBy?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType>;
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  primaryColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  track?: Resolver<ResolversTypes['Track'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaylistTracksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistTracks'] = ResolversParentTypes['PlaylistTracks']> = {
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracks?: Resolver<Array<ResolversTypes['PlaylistTrack']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaylistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlists'] = ResolversParentTypes['Playlists']> = {
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playlists?: Resolver<Array<ResolversTypes['Playlist']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumsArgs, 'ids'>>;
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistArgs, 'id'>>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistsArgs, 'ids'>>;
  categories?: Resolver<ResolversTypes['CategoryPage'], ParentType, ContextType, RequireFields<QueryCategoriesArgs, never>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  markets?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes['Me'], ParentType, ContextType>;
  newReleases?: Resolver<ResolversTypes['Albums'], ParentType, ContextType, RequireFields<QueryNewReleasesArgs, never>>;
  playlist?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType, RequireFields<QueryPlaylistArgs, 'id'>>;
  search?: Resolver<Maybe<ResolversTypes['Search']>, ParentType, ContextType, RequireFields<QuerySearchArgs, 'query' | 'type'>>;
  searchAlbums?: Resolver<ResolversTypes['Albums'], ParentType, ContextType, RequireFields<QuerySearchAlbumsArgs, 'query'>>;
  searchArtists?: Resolver<ResolversTypes['Artists'], ParentType, ContextType, RequireFields<QuerySearchArtistsArgs, 'query'>>;
  searchTracks?: Resolver<ResolversTypes['Tracks'], ParentType, ContextType, RequireFields<QuerySearchTracksArgs, 'query'>>;
  track?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<QueryTrackArgs, 'id'>>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType, RequireFields<QueryTracksArgs, 'ids'>>;
  user?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<QueryUserArgs, 'userId'>>;
};

export type RelatedArtistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelatedArtists'] = ResolversParentTypes['RelatedArtists']> = {
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestrictionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Restrictions'] = ResolversParentTypes['Restrictions']> = {
  reason?: Resolver<ResolversTypes['RestrictionReason'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Search'] = ResolversParentTypes['Search']> = {
  album?: Resolver<Maybe<ResolversTypes['Albums']>, ParentType, ContextType>;
  artists?: Resolver<Maybe<ResolversTypes['Artists']>, ParentType, ContextType>;
  tracks?: Resolver<Maybe<ResolversTypes['Tracks']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopTracksResolvers<ContextType = any, ParentType extends ResolversParentTypes['TopTracks'] = ResolversParentTypes['TopTracks']> = {
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  audioFeatures?: Resolver<ResolversTypes['AudioFeatures'], ParentType, ContextType>;
  availableMarkets?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
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

export type TracksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tracks'] = ResolversParentTypes['Tracks']> = {
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  __resolveType: TypeResolveFn<'Me' | 'UserProfile', ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Followers'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ObjectType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalUrls?: Resolver<ResolversTypes['ExternalUrls'], ParentType, ContextType>;
  followers?: Resolver<ResolversTypes['Followers'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Image']>, ParentType, ContextType>;
  playlists?: Resolver<ResolversTypes['Playlists'], ParentType, ContextType, RequireFields<UserProfilePlaylistsArgs, never>>;
  type?: Resolver<ResolversTypes['ObjectType'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Albums?: AlbumsResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  Artists?: ArtistsResolvers<ContextType>;
  AudioFeatures?: AudioFeaturesResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryPage?: CategoryPageResolvers<ContextType>;
  ExplicitContentSettings?: ExplicitContentSettingsResolvers<ContextType>;
  ExternalIds?: ExternalIdsResolvers<ContextType>;
  ExternalUrls?: ExternalUrlsResolvers<ContextType>;
  Followers?: FollowersResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  LinkedFrom?: LinkedFromResolvers<ContextType>;
  Me?: MeResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Playlist?: PlaylistResolvers<ContextType>;
  PlaylistTrack?: PlaylistTrackResolvers<ContextType>;
  PlaylistTracks?: PlaylistTracksResolvers<ContextType>;
  Playlists?: PlaylistsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RelatedArtists?: RelatedArtistsResolvers<ContextType>;
  Restrictions?: RestrictionsResolvers<ContextType>;
  Search?: SearchResolvers<ContextType>;
  TopTracks?: TopTracksResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  Tracks?: TracksResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
};

