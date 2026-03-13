const SkeletonLoader = () => {
  // 20 elemana sahip bir dizi oluştur
  const array = new Array(20).fill('selam');

  return (
    <div className="page">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6 space-y-8">
        {array.map((i, key) => (
          <div key={key} className="animate-pulse">
            {/* Thumbnail */}
            <div className="w-full bg-grey aspect-video rounded-xl mb-3"></div>

            {/* Video Bilgileri */}
            <div className="flex gap-3">
              {/* avatar */}
              <div className="size-9 rounded-full bg-grey" />

              {/* yazı içeriği */}
              <div className="flex-1 space-y-2">
                {/* Başlık */}
                <div className="h-4 bg-grey rounded w-full" />
                <div className="h-4 bg-grey rounded w-3/4" />

                {/* Kanal İsmi */}
                <div className="h-3 bg-grey w-1/3 rounded" />

                {/* Görüntülenme / Tarih */}
                <div className="flex gap-2">
                  <div className="h-3 bg-grey rounded w-20" />
                  <div className="h-3 bg-grey rounded w-26" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
